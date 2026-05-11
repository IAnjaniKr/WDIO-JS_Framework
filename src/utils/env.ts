function requiredEnv(name: string) {
    const value = process.env[name]

    if (!value) {
        throw new Error(`Missing required environment variable: ${name}`)
    }

    return value
}

export const USER_NAME = requiredEnv('USER_NAME')
export const PASSWORD = requiredEnv('PASSWORD')
export const INVALID_USER_NAME = requiredEnv('INVALID_USER_NAME')
export const INVALID_PASSWORD = requiredEnv('INVALID_PASSWORD')
export const PASSWORD_UPPER_CASE = requiredEnv('PASSWORD_UPPER_CASE')
export const MISSING_EMAIL_PASSWORD = requiredEnv('MISSING_EMAIL_PASSWORD')
