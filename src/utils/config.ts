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
    for (const filepath of files) {
        const file = Bun.file(`${process.cwd()}/${filepath}`)
        const exist = await file.exists()
        if (exist) {
            const content = await file.text()
            configContent += content + '\n'
        }
    }
    const config = parse<ConfigType>(configContent)
    return config
}
