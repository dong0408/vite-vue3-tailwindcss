let storage = {
    local: {
        instance: window.localStorage,
    },
    session: {
        instance: window.sessionStorage,
    },
}

const api = {
    get(key, def) {
        if (this.instance.disabled) {
            return def
        }
        let value = deserialize(this.instance.getItem(key))
        return value == undefined ? def : value
    },
    getAll() {
        if (this.instance.disabled) {
            return null
        }
        let res = {}
        for (let i = 0; i < this.instance.length; i++) {
            let key = this.instance.key(i)
            let value = this.get(key)
            res[key] = value
        }
        return res
    },
    set(key, value) {
        if (this.instance.disabled) {
            return
        }
        this.instance.setItem(key, serialize(value))
    },
    has(key) {
        return this.get(key) !== undefined
    },
    remove(key) {
        if (this.instance.disabled) {
            return
        }
        this.instance.removeItem(key)
    },
    clear() {
        if (this.instance.disabled) {
            return
        }
        this.instance.clear()
    },
}

Object.assign(storage.local, api)
Object.assign(storage.session, api)

storageTest(storage.local)
storageTest(storage.session)

function serialize(val) {
    return JSON.stringify(val)
}

function deserialize(val:any) {
    if (typeof val !== 'string') {
        return undefined
    }
    try {
        return JSON.parse(val)
    } catch (e) {
        return val || undefined
    }
}

function storageTest(storage:any) {
    try {
        const testKey = '__storejs__'
        storage.set(testKey, testKey)
        if (storage.get(testKey) !== testKey) {
            console.error('storage 方法库 初始化失败')
            storage.disabled = true
        }
        storage.remove(testKey)
    } catch (e) {
        console.error('storage 方法库 初始化失败')
        storage.disabled = true
    }
}

export default storage
