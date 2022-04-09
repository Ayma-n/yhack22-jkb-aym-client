export interface Person {
    firstName: string | null;
    lastName: string | null;
    email: string | null;
    id: string | null; 
    university: string | null;
  }
  
export const nullPerson: Person = {
  firstName: null,
  lastName: null,
  email: null,
  id: null,
  university: null
};