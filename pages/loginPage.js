class LoginPage {
    constructor(page){
        this.page=page
        this.logoname=page.getByRole('heading',{name:'Learn Automation Courses'})
        this.usernameinput=page.getByPlaceholder('Username')
        this.passwordinput=page.getByPlaceholder('Password')
        this.loginBtn=page.getByRole('button',{name:'Sign In'})
    }

    async navigateToLoginPage(){
        await this.page.goto('/login')
    }
    async loginValidation(){
        await this.logoname.toContainText('Learn Automation Courses')
    }
    async login(username, password){
        await this.usernameinput.fill(username)
        await this.passwordinput.fill(password)
        await this.loginBtn.click()
    }
}