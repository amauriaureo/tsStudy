type User = {
    name: string;
    lastName: string;
    birthday: string;
    age?: number;
}

const Maria: User = {
    name: 'Maria',
    lastName: 'Azevedo',
    birthday: '10/10/1976'
}

// union types
// | (como se fosse o ||)
type LogLevel = 'info' | 'error' | 'debug';
function logMessage(message: string, level: LogLevel) {
    console.log(`[${level}] - ${message}`)
}

logMessage('Uma mensagem info', 'error')
logMessage('Uma mensagem info', 'info')
logMessage('Uma mensagem info', 'debug')
// logMessage('Uma mensagem info', 'erro')

// intersection types: &
type About = {
    bio: string;
    interests: string[]
}

type Profile = User & About;
const userWithProfile: Profile = {
    name: 'Maria',
    lastName: 'Azevedo',
    birthday: '10/10/1976',
    bio: 'Olá, meu nome é Maria',
    interests: ['gatos', 'música', 'fotografia']
}

type ComposedProfile = User & {
    log: LogLevel;
}