import { Component, OnInit, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

interface Sound {
  title: string;
  category: string;
  audio: string;
  image: string;
}

@Injectable({ providedIn: 'root' })
export class SoundService {
  private http = inject(HttpClient);

  getAllSounds(): Observable<Sound[]> {
    return this.http.get<Sound[]>('/api/media/sounds');
  }
}

@Component({
  selector: 'app-sound-journey',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './sound-journey.component.html',
  styleUrl: './sound-journey.component.scss'
})
export class SoundJourneyComponent implements OnInit {
  soundList: Sound[] = [];
  nowPlaying: Sound | null = null;
  recentList: Sound[] = [];

  constructor(private soundService: SoundService) {}

  ngOnInit(): void {
    this.soundService.getAllSounds().subscribe({
      next: data => this.soundList = data,
      error: err => console.error('Failed to load sounds', err)
    });
  }

  playSound(sound: Sound): void {
    this.nowPlaying = sound;
    this.recentList = [sound, ...this.recentList.filter(s => s.title !== sound.title)].slice(0, 5);
  }
}
