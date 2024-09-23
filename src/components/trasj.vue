<template>
    <div>
        <input v-model="token" placeholder="Enter your JWT token" />
        <button @click="checkToken">Check Token</button>

        <div v-if="message">
            <p>{{ message }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            token: '',
            message: '',
        };
    },
    methods: {
        parseJwt(token) {
            const parts = token.split('.');
            if (parts.length !== 3) {
                throw new Error('JWT is malformed');
            }
            const payload = JSON.parse(atob(parts[1]));
            return payload;
        },
        isJwtExpired(token) {
            const payload = this.parseJwt(token);
            const exp = payload.exp;
            const currentTime = Math.floor(Date.now() / 1000);
            return exp < currentTime;
        },
        hoursLeftUntilExpiration(token) {
            const payload = this.parseJwt(token);
            const exp = payload.exp;
            const currentTime = Math.floor(Date.now() / 1000);

            if (exp > currentTime) {
                const timeLeftInSeconds = exp - currentTime;
                return Math.floor(timeLeftInSeconds / 3600);
            } else {
                return 0; // Already expired
            }
        },
        checkToken() {
            try {
                if (this.isJwtExpired(this.token)) {
                    this.message = 'JWT is expired';
                } else {
                    const hoursLeft = this.hoursLeftUntilExpiration(this.token);
                    this.message = `JWT expires in ${hoursLeft} hours`;
                }
            } catch (error) {
                this.message = error.message;
            }
        },
    },
};
</script>

<style scoped>
input {
    margin-right: 8px;
}
</style>