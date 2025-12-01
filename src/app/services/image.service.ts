import { Injectable, inject } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
    providedIn: 'root',
})
export class ImageService {
    private http = inject(HttpClient);

    private apiUrl = 'https://api.duckduckgo.com';
    private baseImageUrl = 'https://duckduckgo.com';

    searchImage(query: string): Observable<string | null> {
        const url = `${this.apiUrl}/?q=${encodeURIComponent(query)}&format=json&pretty=1`;

        return new Observable((observer) => {
            this.http.get<any>(url).subscribe({
                next: (response) => {
                    const relativeImagePath = response?.Image;
                    if (relativeImagePath) {
                        observer.next(this.baseImageUrl + relativeImagePath); // Prepend base URL
                    } else {
                        observer.next(null); // No image found
                    }
                },
                error: (err) => {
                    console.error('Error fetching image:', err);
                    observer.error(err);
                },
            });
        });
    }
}