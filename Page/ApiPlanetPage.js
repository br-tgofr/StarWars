class ApiPlanetPage{
    visitApiPlanet(){
        cy.visit('https://swapi.co/api/planets/1/')
      }
      validateApiPlanetStatus(){
        const apiPlanetStatus = cy.request('GET', 'https://swapi.co/api/planets/1/')
        apiPlanetStatus.its('status').should('be.eql', 200)
      }  
    
      validateApiPlanetFields(){
          cy.request('GET', 'https://swapi.co/api/planets/1/')
          .then((response) => {
          expect(response.body).to.have.property('name', 'Tatooine')
          expect(response.body).to.have.property('rotation_period', '23')
          expect(response.body).to.have.property('orbital_period', '304')
          expect(response.body).to.have.property('diameter', '10465')
          expect(response.body).to.have.property('climate', 'arid')
          expect(response.body).to.have.property('gravity', '1 standard')
          expect(response.body).to.have.property('terrain', 'desert')
          expect(response.body).to.have.property('surface_water', '1')
          expect(response.body).to.have.property('population', '200000')
        })   
    }
}
export default ApiPlanetPage;