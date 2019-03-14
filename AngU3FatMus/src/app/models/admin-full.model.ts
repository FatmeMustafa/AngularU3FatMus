export class AdminFull {
   
    constructor (
        public firstName: string,
        public lastName: string,
        public email: string,
        public password: string
    ) { }
}

/*
****************NOTES****************
*The admin-full.model.ts file is created to define how a complete admin object looks. Since many AdminFull objects 
will be created, the class AdminFull, will serve as a blueprint for creating multiple AdminFull objects with the same structure.
*************************************
*/