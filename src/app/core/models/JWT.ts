// import jwt_decode from 'jwt-decode';

export class JWT {
  public iss: number;
  public roles: string[];
  public sub: string;
  public exp: number;

  constructor(iss:number,roles: string[], sub: string, exp:number) {
    this.iss = iss;
    this.roles = roles;
    this.sub = sub;
    this.exp = exp;
  }
}

export class JWTHelper{

  public static getPrimaryRoleFromMemory() {
    let jwt: string = localStorage.getItem('token')!;
    let role: string = "";
    // if (jwt != null) {
    //   let decoded: JWT = jwt_decode(jwt);
    //   decoded.roles.forEach(
    //     data => {
    //       role += " " + data;
    //     }
    //   );
    //   role = decoded.roles[0];
    // }
    return role;
  }
}
