type PersonDetails = {
    id: number;
    name: string;
  };
  
  type PersonWithAge = PersonDetails & {
    age: number;
  };
  
  type PersonWithCity = PersonDetails & {
    age?: number;
    city?: string;
  };
  