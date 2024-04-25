function hashMap () {
    let bucket = new Array(16);
    let newbucket = new Array(16);

    const hash = (key) => {
        let hashCode = 0;
      
        const primeNumber = 31;
        for (let i = 0; i < key.length; i++) {
          hashCode = primeNumber * hashCode + key.charCodeAt(i);
        }
     
        return hashCode%bucket.length;
    };

    const set = (key, value) => {
        if(length(bucket)/bucket.length > 0.75) {
            let factor = bucket.length*2;
            newbucket = bucket;
            bucket = new Array(factor);
            for(i = 0; i < newbucket.length; i++) {
                if(newbucket[i]) {
                setsimple(newbucket[i][0] ,hash(newbucket[i][0]));
                };
            };
            bucket = newbucket;
        };

        if(bucket[value]) {
            if(bucket[value][0] === key) return;
            let next = bucket[value];
            while (next[2] != null) {
                next = next[2];
            }
            next[2] = [key, value, null];
            return;
        };
        bucket[value] = [key, value, null];
    };

    const setsimple = (key, value) => {
        if(newbucket[value]) {
            if(newbucket[value][0] === key) return;
            let next = newbucket[value];
            while (next[2] != null) {
                next = next[2];
            }
            next[2] = [key, value, null];
            return;
        };
        newbucket[value] = [key, value, null];
    };

    const get = (key) => {
        let value = hash(key);
        let next = bucket[value];
        if(bucket[value]) {
            while (next[2] != null) {
                if(next[0] === key) return value;
                next = next[2];
            };
        };
        return null;
    };

    const has = (key) => {
        let value = hash(key);
        let next = bucket[value];
        if(bucket[value]) {
            while (next[2] != null) {
                if(next[0] === key) return true;
                next = next[2];
            };
        };
        return false;
    };

    const remove = (key) => {
        let value = hash(key);
        let next = bucket[value];
        if(bucket[value]) {
            while (next[2] != null) {
                if(next[0] === key) {
                    delete next;
                    return true;
                }
                next = next[2];
            };
        };
        return false;
    };

    const length = () => {
        let n = 0;
        for(i = 0; i < bucket.length; i++) {
            if(bucket[i]) {
                n = n + 1;
                let next = bucket[i];
                while(next[2] != null) {
                    n = n + 1;
                    next = next[2];
                };
            };
        };
        return n
    };

    const clear = () => {
        for(i = 0; i < bucket.length; i++) {
            bucket[i] = undefined;
        };
    };

    const keys = () => {
        let array = [];
        for(i = 0; i < bucket.length; i++) {
            if(bucket[i]) {
                array.push(bucket[i][0]);
                let next = bucket[i];
                while(next[2] != null) {
                    next = next[2];
                    array.push(next[0]);
                };
            };
        };
        return array;        
    };

    const values = () => {
        let array = [];
        for(i = 0; i < bucket.length; i++) {
            if(bucket[i]) {
                array.push(bucket[i][1]);
                let next = bucket[i];
                while(next[2] != null) {
                    next = next[2];
                    array.push(next[1]);
                };
            };
        };
        return array;       
    };

    const entries = () => {
        let array = [];
        for(i = 0; i < bucket.length; i++) {
            if(bucket[i]) {
                array.push([bucket[i][0], bucket[i][1]]);
                let next = bucket[i];
                while(next[2] != null) {
                    next = next[2];
                    array.push([next[0], next[1]]);
                };
            };
        };
        return array;       
    };


    return {
        bucket: bucket,
        hash: hash,
        set: set,
        get: get,
        remove: remove,
        length: length,
        clear: clear,
        keys: keys,
        values: values,
        entries: entries,
        has: has,
        setsimple: setsimple,
    }
}

let josh = new hashMap();
josh.set('Tom', josh.hash('Tom'));
console.log(josh.bucket);
console.log(josh.get('Tom'));
console.log(josh.remove('Tom'));
console.log(josh.remove('Bill'));
console.log(josh.bucket);
josh.set('Bill', josh.hash('Bill'));
console.log(josh.length());
josh.clear();
console.log(josh.length());
josh.set('Samantha', josh.hash('Samantha'));
josh.set('Tanner', josh.hash('Tanner'));
josh.set('ranneT', josh.hash('ranneT'));
josh.set('rennaT', josh.hash('rennaT'));
console.log(josh.keys());
console.log(josh.values());
console.log(josh.entries());
console.log(josh.get('ranneT'));
console.log(josh.has('ranneT'));
console.log(josh.length());
console.log(josh.keys());
console.log(josh.values());
console.log(josh.entries());
josh.set('Biv', josh.hash('Biv'));
josh.set('Bivsv', josh.hash('Bivsv'));
josh.set('Bivv', josh.hash('Bivv'));
josh.set('Biavv', josh.hash('Biavv'));
josh.set('Biam', josh.hash('Biam'));
josh.set('Bia', josh.hash('Bia'));
console.log(josh.entries());
josh.set('Biaam', josh.hash('Biaam'));
josh.set('Biaaammm', josh.hash('Biaaammm'));
josh.set('Biaammm', josh.hash('Biaammm'));
josh.set('Bio', josh.hash('Bio'));
josh.set('Bioz', josh.hash('Bioz'));
josh.set('Biozs', josh.hash('Biozs'));


console.log(josh.bucket);
console.log(josh.entries());