/// <reference types="cypress" />

describe('Sudoku', () => {
  it('shows the initial game', () => {
    // stop the game clock
    cy.clock()

    // load the initial and solved game boards
    cy.fixture('init-array.json').then((initialBoard) => {
      cy.fixture('solved-array.json').then((solvedBoard) => {
        cy.visit('/', {
          onBeforeLoad(win) {
            win.__initArray = initialBoard
            win.__solvedArray = solvedBoard
          },
        })
      })
    })

    // the board fixture has 45 filled cells at the start
    cy.get('.game__cell--filled').should('have.length', 45)
    cy.contains('.status__time', '00:00').should('be.visible')
    cy.contains('.status__difficulty-select', 'Easy').should('be.visible')
  })
})
