class Animales {
    constructor (name, imagen, edad, comentarios, sonido){
        this._name = name;
        this._imagen = imagen;
        this._edad = edad;
        this._comentarios = comentarios;
        this._sonido = sonido; 
    }
    get name()  {
        return this._name;
    }
    set name(value)   {
        this._name = value;
    }
    get imagen()  {
        return this._imagen;
    }
    set imagen(value)   {
        this._imagen = value;
    }
    get edad()  {
        return this._edad;
    }
    set edad(value)   {
        this._edad = value;
    }
    get comentarios()  {
        return this._comentarios;
    }
    set comentarios(value)   {
        this._comentarios = value;
    }
    get sonido()  {
        return this._sonido;
    }
    set sonido(value)   {
        this._sonido = value;
    }
}

class Leon extends Animales {
    constructor (name, imagen, edad, comentarios, sonido){
        super (name, imagen, edad, comentarios, sonido)
    }
    reproducirRugir (){}
}

class Lobo extends Animales {
    constructor (name, imagen, edad, comentarios, sonido){
        super (name, imagen, edad, comentarios, sonido)
    }
    reproducirAullar (){}
}

class Oso extends Animales {
    constructor (name, imagen, edad, comentarios, sonido){
        super (name, imagen, edad, comentarios, sonido)
    }
    reproducirGrunir (){}
}

class Serpiente extends Animales {
    constructor (name, imagen, edad, comentarios, sonido){
        super (name, imagen, edad, comentarios, sonido)
    }
    reproducirSisear (){}
}

class Aguila extends Animales {
    constructor (name, imagen, edad, comentarios, sonido){
        super (name, imagen, edad, comentarios, sonido)
    }
    reproducirChillar (){}
}


export { Leon, Lobo, Oso, Serpiente, Aguila };