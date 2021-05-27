const y = 'lelele';

const f = () => {
    const x = 'lalalal';
    console.log(x);
}

const g = () => {
    const a = 'lala';
    console.log(a, y)
    //console.log(a,x)
}

f();
g()


//------------------
//Alcance léxico
const h = () => {
    const x = 'lalala'
    return () => {
        const z = 'lolo'
        console.log(x, y, z)
    }
}

console.log(h()());

//------------------
//Ejemplo 
const i = (x) => {
    return () => x;
}
i('Rolando')();

//--------------------
//Ejemplo práctico

const auditProps = {
    createdAt={ default: new Date },
    updatedAt={ default: new Date },
    createdBy={ type: Schema.Types.ObjectId, ref: 'User' },
    updatedBy={ type: Schema.Types.ObjectId, ref: 'User' },
}

const Model = defaultProps => {
    return (name, props) => {
        const schema = mongoose.schema({
            ...defaultProps,
            ...props,
        })
        return mongoose.model(name, schema)
    }
}

export const withAudit = Model(auditProps);


