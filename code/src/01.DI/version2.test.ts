interface ForNotifier {
  send(to: string, message: string): void
}

class UserService2 {
  constructor(private readonly notifier: ForNotifier) { }

  registerUser(contact: string) {
    this.notifier.send(contact, 'Welcome to our service!')
  }
}

// ------------------------------------------------------------

class EmailNotifier implements ForNotifier {
  send(to: string, message: string) {
    console.log(`Email sent to ${to} with message: ${message}`)
  }
}

class SmsNotifier implements ForNotifier {
  send(to: string, message: string) {
    console.log(`SMS sent to ${to} with message: ${message}`)
  }
}

// ------------------------------------------------------------

describe('UserService with EmailNotifier', () => {
  it('should send a welcome email upon user registration', () => {
    const emailNotifier = new EmailNotifier()
    const userService = new UserService2(emailNotifier)
    const emailSenderSpy = jest.spyOn(EmailNotifier.prototype, 'send').mockImplementation(() => { })
    const testEmail = 'test@example.com'

    userService.registerUser(testEmail)

    expect(emailSenderSpy).toHaveBeenCalledWith(testEmail, 'Welcome to our service!')

    // Restore the original implementation
    emailSenderSpy.mockRestore()
  })
})
