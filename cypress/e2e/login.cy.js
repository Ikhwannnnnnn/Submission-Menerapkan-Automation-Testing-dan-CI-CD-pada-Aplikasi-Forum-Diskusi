/**
 * - Login spec
 *   - should display login page correctly
 *   - should display alert when email is empty
 *   - should display alert when password is empty
 *   - should display alert when email and password are wrong
 *   - should display homepage when email and password are correct
 */

describe("Login spec", () => {
  beforeEach(() => {
    cy.visit("http://localhost:3000/");
  });

  it("should display login page correctly", () => {
    // memverifikasi elemen yang harus tampak pada halaman login
    cy.get("input[placeholder=\"Masukkan Email\"]").should("be.visible");
    cy.get("input[placeholder=\"Masukkan Kata Sandi\"]").should("be.visible");
    cy.get("button")
      .contains(/^Masuk$/)
      .should("be.visible");
  });

  it("should display alert when email is empty", () => {
    // klik tombol login tanpa mengisi email
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on("window:alert", (str) => {
      expect(str).to.equal("\"email\" is not allowed to be empty");
    });
  });

  it("should display alert when password is empty", () => {
    // mengisi email
    cy.get("input[placeholder=\"Masukkan Email\"]").type("haha@email.com");

    // klik tombol login tanpa mengisi password
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on("window:alert", (str) => {
      expect(str).to.equal("\"password\" is not allowed to be empty");
    });
  });

  it("should display alert when email and password are wrong", () => {
    // mengisi email
    cy.get("input[placeholder=\"Masukkan Email\"]").type("haha1@gmail.com");

    // mengisi password yang salah
    cy.get("input[placeholder=\"Masukkan Kata Sandi\"]").type("wrong_password");

    // menekan tombol Login
    cy.get("button")
      .contains(/^Masuk$/)
      .click();

    // memverifikasi window.alert untuk menampilkan pesan dari API
    cy.on("window:alert", (str) => {
      expect(str).to.equal("Email or password is wrong");
    });
  });

  it("should display homepage when email and password are correct", () => {
    // mengisi email
    cy.get("input[placeholder=\"Masukkan Email\"]").type("surya16@gmail.com");

    // mengisi password
    cy.get("input[placeholder=\"Masukkan Kata Sandi\"]").type("surya16123");

    // menekan tombol Login
    cy.get("button")
      .contains(/^Masuk$/)
      .click();


      // Menambahkan waktu tunggu sebelum memverifikasi tombol Logout
  cy.wait(5000); // Menunggu 5 detik, sesuaikan dengan kebutuhan

    // memverifikasi bahwa elemen yang berada di homepage ditampilkan
    cy.get("button").contains('Logout').should('be.visible');
  });
});
