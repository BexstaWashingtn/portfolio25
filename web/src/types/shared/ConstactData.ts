export type Adress = {
  city: string;
  country: string;
  postalCode: string;
  street: string;
};

export type ContactData = {
  address: Adress;
  email: string;
  firstName: string;
  lastName: string;
  phone: string;
  github?: string;
};
