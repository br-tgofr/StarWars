import ApiPeoplePage from '../Page/ApiPeoplePage'

describe('People Instance', () => {
  it('Api People', () => {
    const people = new ApiPeoplePage();
    people.visitApiPeople();
    people.validateApiPeopleStatus();
    people.validateApiPeopleFields();
  });
});