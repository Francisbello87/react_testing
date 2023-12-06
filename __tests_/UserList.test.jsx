const { UserList } = require("@/app/components/UserList");
const { render } = require("@testing-library/react");

describe('UserList - Rendering', () => { 
    it('should have the text francis', () => {
        render(<UserList/>)
    });
 })