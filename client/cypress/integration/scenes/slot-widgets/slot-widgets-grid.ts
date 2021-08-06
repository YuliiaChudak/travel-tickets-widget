import slotWidgetFixture from '../../../fixtures/slot-widgets/success.json'
import fareFixture from '../../../fixtures/fares/success.json'

context('Slot widgets grid', () => {

    it('displays slot widget correctly', () => {
        cy.intercept('GET', '**/slot-widgets', { fixture: 'slot-widgets/success.json' }).as('getSlotWidgets')
        cy.intercept('GET', '**/fares/**', { fixture: 'fares/success.json' }).as('getFare')
        cy.visit('/')

        const [widget] = slotWidgetFixture["slot-widgets"]
        cy.findByText(widget.bigTitle, { timeout: 1000 }).should('exist');
        cy.findByText(widget.smallTitle, { timeout: 1000 }).should('exist');
        cy.findByText(widget.smallTitle, { timeout: 1000 }).should('exist');
        cy.findByText(fareFixture.fare.time, { timeout: 1000 }).should('exist');
    });

    it('displays an error if fare not loaded', function () {
        cy.intercept('GET', '**/slot-widgets', { fixture: 'slot-widgets/success.json' }).as('getSlotWidgets')
        cy.intercept('GET', '**/fares/**', (req) => {
            req.destroy();
        }).as('getFare')
        cy.visit('/')

        cy.findByText('Details for this widget are temporary unavailable.', { timeout: 1000 }).should('exist');
    });

    it('displays an error if slot widgets are failed to load', () => {
        cy.intercept('GET', '**/slot-widgets', (req) => {
            req.destroy();
        }).as('getFare')
        cy.visit('/')

        cy.findByText("Error Network Error occurred. We'll get back to you soon!", { timeout: 1000 }).should('exist');
    });
});
