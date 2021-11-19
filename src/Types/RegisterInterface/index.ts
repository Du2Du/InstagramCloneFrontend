export interface RegistrationProps {
  token: string;
  userCreate: {
    createdAt: Date;
    email: string;
    user: string;
    password: string;
    _id: string;
  };
}
