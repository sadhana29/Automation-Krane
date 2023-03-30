class login
{
    button(){
        return cy.get('button[type=submit]')

    }

    add(){
        return cy.get('.card__flex--button')
    }

    projectName(){
        return cy.get('input[placeholder=\'Enter Project Name\']')
    }

    projectBudget(){
        return cy.get('input[type=number]')
    }

    projectCurrency(){
        return cy.get('.react-select__control')
    }

    select(){
        return cy.get('#react-select-2-option-147')
    }

    projectCountry(){
        return cy.get(':nth-child(1) > div > .react-country-select')
    }

    projectState(){
        return cy.get(':nth-child(2) > div > .react-country-select')
    }

    projectCity(){
        return cy.get('input[placeholder=\'City\']')
    }

    projectAddress(){
        return cy.get('input[placeholder=\'Address\']')
    }

    projectZipcode(){
        return cy.get('input[placeholder=\'00000-0000\']')
    }

    toast(){
        return cy.get('.krane-toast')
    }

    projectList(){
        return cy.get(':nth-child(2) > .card') //added Project
    }
}
export default login;

