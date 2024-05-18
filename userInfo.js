const {formattedString} = require('./arrayManipulation');
let currentId = 1;

function createUserProfiles(names, formattedString){
    return names.map((name,index )=>({
        originalName :name,
        modifiedName: formattedString[index],
        id: currentId++
    }))

}