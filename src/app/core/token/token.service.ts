import { Injectable } from '@angular/core';

const KEY = 'authToken';

@Injectable({ providedIn: 'root' })
export class TokenService {
    /**
     * Significa que, se this.getToken() for nulo, a primeira exclamação trocará para "verdadeiro",
     * e a segunda, para "falso", como queremos. Da mesma maneira, se this.getToken() for uma string existente, a primeira exclamação a trocará por "falso", e depois ela virará "verdadeiro". Isso é muito utilizado no JavaScript, para converter valores em booleanos.
     */
    hasToken() {
        return !!this.getToken();
    }

    setToken(token) {
        window.localStorage.setItem(KEY, token);
    }

    getToken() {
        return window.localStorage.getItem(KEY);
    }

    removeToken() {
        window.localStorage.removeItem(KEY);
    }
}