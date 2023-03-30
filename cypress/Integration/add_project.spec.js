/// <reference types= "cypress" />
import add from "./project/data_create"; 
import Login from "../fixtures/loginData.json";
import Data from "../fixtures/projectData.json";


describe('Application', () => {
    const app = new add()

    before('Login page', () => {
        cy.visit(Cypress.env('appUrl'))
        cy.get('input[type=email]').type(Login.email)
        app.button().contains('Continue').click()
        cy.get('input[type=password]').type(Login.password)
        app.button().contains('Log In').click()
        cy.url().should('include', '/projects')
      })

      it('Verify that the admin can add project', () => {
        app.add().click()
        app.projectName().type(Data.createProject.name)
        app.projectBudget().type(Data.createProject.budget)
        app.projectCurrency().click()
        app.select(Data.createProject.currency)
        app.projectCountry().select(Data.createProject.country) 
        app.projectState().select(Data.createProject.stateProvince)
        app.projectCity().type(Data.createProject.city)
        app.projectZipcode().type(Data.createProject.postZipcode)
        app.projectAddress().type(Data.createProject.address)
        app.button().contains('Create Project').click({force:true})
        app.toast().should('contain','Project Added Successfully!')
        app.projectList().should('contain', Data.createProject.name)
        
      })
  })