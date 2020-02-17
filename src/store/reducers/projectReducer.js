const initSate={
    projects:[
        {id:'1', title:'Help me find peach', content:'lorem ipsum bla bla bla bla bla bla bla'},
        {id:'2', title:'Colect all the stars', content:'nla bla bla blabla bla bla bla bla bla bla bla'},
        {id:'3', title:'Egg hung yoshi', content:'bla bla bla bla bla bla bla bla bla bla bla bla bla'},

    ]

}

const projectReducer=(state=initSate,action)=>{
    switch (action.type){
        case 'CREATE_PROJECT':
            console.log("Project created", action.project)
    }
    return state
}

export default projectReducer