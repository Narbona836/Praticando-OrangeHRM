class EmployList{
    selectors() {
        const seletores = {
        usernameInput: "input[name='username']",
        passwordInput: "input[name='password']",
        loginButton: "button[type='submit']",
        dashboardUrl:"/web/index.php/dashboard/index",
        buttonPIM: "[data-v-6475d26d='']",
        buttonEmployeeList: "[data-v-5327b38a='']",
        employeeListUrl: "/web/index.php/pim/viewEmployeeList",
        campoEmployeeId: "[data-v-1f99f73c='']",
        buttonSearch: "[data-v-10d463b7='']",
        checkUser: "[data-v-5a621acd='']",
        campoEmployeeName: "[data-v-75e744cd='']"
        }
        return seletores;
    } 

    pim() {
        cy.get(this.selectors().buttonPIM).eq(4).click();
        cy.get(this.selectors().buttonEmployeeList).eq(3).click();
        cy.url().should('include', this.selectors().employeeListUrl);
    }
    employListId() {

        cy.get(this.selectors().buttonSearch).eq(1).click();
        cy.get(this.selectors().checkUser,this.employeeId).eq(1).should('be.visible');
    }
    employListName() {
        cy.get(this.selectors().buttonSearch).eq(1).click();
        cy.get(this.selector().checkUser,this.username).eq(1).should('be.visible');
    }
}

export default EmployList