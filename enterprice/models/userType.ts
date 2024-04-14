// Model can also include methods for business logic related to the data structure.
export class User {
    id: string;
    name: string;
    email: string;
  
    constructor(id: string, name: string, email: string) {
      this.id = id;
      this.name = name;
      this.email = email;
    }
  
    getFormattedName(): string {
      return `${this.name} (${this.email})`;
    }
  }