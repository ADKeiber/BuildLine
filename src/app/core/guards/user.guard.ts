import { CanActivateFn } from '@angular/router';

/**
 * Used to validate that an individual to navigate off of the login page and can access overview
 *
 * @param route {@link ActivatedRouteSnapsho}
 * @param state {@link RouterStateSnapsho}
 */
export const userGuard: CanActivateFn = (route, state) => {
  let username = localStorage.getItem("username")
  if(username == null)
    username = ""
  let password = localStorage.getItem("password")
  if(password == null)
    password = ""
  return username == "admin" && password == "12345";
};
