import {Role} from "./Role";

/**
 * User model used to store data of a user
 */
export class User {

  private id: number;
  private email: string;
  private password: string;
  private username: string;

  private roles: Role[];

  /**
   * Default constructor for user
   * @param username string of the user's username
   * @param password string of the user's password
   */
  constructor(username: string, password:string) {
    this.id = 0;
    this.email = "";
    this.password = password;
    this.roles = [];
    this.username = username;
  }

  /**
   * Gets the ID of the user
   */
  public getId() {
    return this.id;
  }

  /**
   * Gets the Roles of the user
   */
  public getRoles() : Role[] {
    return this.roles;
  }

  /**
   * Gets the user's password
   */
  public getPassword() {
    return this.password;
  }

  /**
   * Gets the email of the user
   */
  public getEmail() {
    return this.email;
  }

  /**
   * Gets the username of the user
   */
  public getUsername() {
    return this.username;
  }
}
