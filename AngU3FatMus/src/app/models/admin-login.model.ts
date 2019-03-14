export class AdminLogin { 
    
    constructor (
        public email: string,
        public password: string
    ) { }
}

/*
****************NOTES****************
*The admin-login.model.ts file is created to define how an admin object looks like when its logged in. Since many AdminLogin objects 
will be created, the class AdminLogin, will serve as a blueprint for creating multiple AdminLogin objects with the same structure.
*************************************
*/
