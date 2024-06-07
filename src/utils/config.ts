// config.ts
import {parse} from 'dotenv'


const getMode = () => {
    const mode = process.env.NODE_ENV ?? 'development'
    if (mode === 'development') {
        return 'dev'
    }
    return mode
}

export const readEnvFile = async <ConfigType extends Record<string, any>>(): Promise<ConfigType> => {
    const mode = getMode()
    const files = [
        '.env',
        `.env.${mode}`,
        '.env.local',
    ]
    let configContent = ''
    console.log('read file')
    for (let i = 0; i < files.length; i++) {
        const file = Bun.file(`${process.cwd()}/${files[i]}`)
        const exist = await file.exists()
        if (exist) {
            const content = await file.text()
            configContent += content + '\n'
        }
    }
    const config = parse<ConfigType>(configContent)
    return config
}
