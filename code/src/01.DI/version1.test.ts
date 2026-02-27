class EmailSender {
  send(to: string, message: string) {
    console.log(`Email sent to ${to} with message: ${message}`)
  }
}

class UserService {
  registerUser(email: string) {
    const emailSender = new EmailSender()
    emailSender.send(email, 'Welcome to our service!')
  }
}

// ------------------------------------------------------------

describe('UserService', () => {
  it('should send a welcome email upon user registration', () => {
    const userService = new UserService()
    const emailSenderSpy = jest.spyOn(EmailSender.prototype, 'send').mockImplementation(() => { })
    const testEmail = 'test@example.com'

    userService.registerUser(testEmail)

    expect(emailSenderSpy).toHaveBeenCalledWith(testEmail, 'Welcome to our service!')

    // Restore the original implementation
    emailSenderSpy.mockRestore()
  })
})