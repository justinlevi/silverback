// Automatic Drupal setup/teardown for tests.
beforeEach(() => {
  cy.exec('cd .. && vendor/bin/silverback teardown --cypress');
  cy.exec('cd .. && vendor/bin/silverback setup --cypress', {
    timeout: 600000
  });
});