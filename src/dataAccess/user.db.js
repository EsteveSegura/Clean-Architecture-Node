export default function userDb({userModel}) {
    return Object.freeze({
        addUser,
        findUser,
    })
    async function addUser(user) {
        const addNewUser = new userModel(user)
        const saveNewUser = await addNewUser.save()

        return saveNewUser
    }
    async function findUser(user) {
        //const db = await makeDb()
        return false
    }

}