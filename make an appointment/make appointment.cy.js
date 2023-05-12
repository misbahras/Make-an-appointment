describe('test suit', () => {
    it('cura make an appointment', () => {
      cy.visit('https://katalon-demo-cura.herokuapp.com/')
      cy.url().should('include','herokuapp')
      cy.get('#btn-make-appointment').click()
      cy.get('#txt-username').type('John Doe')
      cy.get('#txt-password').type('ThisIsNotAPassword')
      cy.get('#btn-login').click()
      cy.get('#combo_facility').select('Hongkong CURA Healthcare Center')
      cy.get('#chk_hospotal_readmission').click()
      cy.get('#radio_program_medicaid').click()

  
 
   cy.get('#txt_visit_date').type('28/03/2023')

        cy.get('#txt_comment').click({force: true})
      cy.get('#txt_comment').type('misbah')
      cy.get('#btn-book-appointment').click()
      cy.get('h2').contains('Appointment Confirmation')
      cy.get('.text-center > .btn').click()
      cy.contains('CURA Healthcare Service').click()
      


      
      




      
    })
  })
        
        
        

  