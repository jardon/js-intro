class UserDatabase {

    /**
     * User info will be stored in JSON like this:
     * 
     * let userExample = {
     *    user_id: int,
     *    gtid: 9 digit string,
     *    user_name: string,
     * }
     * 
     * userList: list of user JSON
     * newUserId: unique userId when adding a new user
     * 
     */
    constructor() {
        this.newUserId = 0
        this.userList = []
    }

    /**
     * 
     * Requirments:
     * - Add the user as a JSON object to the this.userList following the JSON object above
     * - Every user must have a unique user_id. This will be given by the database from the this.newUserId attribute. Each time a user is added, 
     *   this.newUserId is incremented by 1
     * - You can assume that personal_id will be unique based on the user. Think of this as like a student id. Provide input validation to make sure 
     *   the personal_id is 9 digits
     * - Log "successful add"
     * - Log "invalid personal id"
     *
     * @param {string} userName 
     * @param {9 digit string} personal_id 
     */
    addUser(userName, personal_id) {
        /*  IMPLEMENT   */
    }

    /**
     * Requirements:
     * - Delete user from user list based on user_id
     * - Log successful delete
     * 
     * @param {int} user_id 
     */
    deleteUser(user_id) {
        /*  IMPLEMENT   */
    }

        /**
     * Requirements:
     * - Edit user from the user list based on user_id
     * - Do not allow edits to user_id
     * - If the field to edit is the personal_id, then ensure that the new personal_id is also 9 digits long
     * - Log unsuccessful edits
     * - Log successful edits
     * 
     * @param {int} user_id 
     * @param {string} field 
     * @param {string} newVal 
     */
    editUser(user_id, field, newVal) {
        /*  IMPLEMENT   */

    }


    /**
     * Requirements:
     * - Search through user_list to find user based on field and searchKey
     * - field: 'user_id', 'personal_id', 'user_name'
     * - searchKey: int or string based on the field selected. You can provide input validation if you want :)
     * - When searching for user_id or personal_id, return the user in an array that matches the searchKey exactly
     * - When searching for user_name, return an array of users that filters based on the searchKey
     * - Return the results as an array of JSON
     * 
     * For instance: 2 users with user_name: 'gye31' and 'gye31-gtri'
     * A searchKey of 'gye31' should return both users JSON. However a searchKey of 'gye31-gtri' should just return the user with username 'gye31-gtri'
     * 
     * @param {string} field 
     * @param {int or string} searchKey 
     * @return array of search results
     */
    userSearch(field, searchKey) {
        /*  IMPLEMENT   */
    }
}

//Testing database
let database = new UserDatabase()
database.addUser('gye31-gtri', '100000000')
database.addUser('gye31', '100000001')
database.addUser('sjayanthi8-gtri', '100000002')
database.addUser('gquigg3', '100000003')
console.log(database.userList)
database.addUser('mbush31', '12345') //should log error and not add to user list
console.log(database.userList)
database.deleteUser(2)
console.log(database.userList)
database.editUser(0, 'user_name', 'randomName')
console.log(database.userList)

searchResults = database.userSearch('user_name', 'g')
console.log("Search results:", searchResults)
/**
 * Search results:
 * [
 *  { user_name: 'gye31', personal_id: '100000001', user_id: 1 },
 *  { user_name: 'gquigg3', personal_id: '100000003', user_id: 3 }
 * ]
 */
