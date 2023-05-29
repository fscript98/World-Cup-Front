import {ChangeDetectorRef, Component, OnInit} from '@angular/core';
import {WorldCupService} from "../services/world-cup.service";
import {countriesFlag} from "../shared/countriesFlags";
import {GoldenBallService} from "../services/golden-ball.service";


@Component({
  selector: 'app-world-cup-list',
  templateUrl: './world-cup-list.component.html',
  styleUrls: ['./world-cup-list.component.scss']
})

export class WorldCupListComponent implements OnInit {
  worldCups: any;
  goldenBalls: any;
  loading = false;
  loadingGoldenBalls = false;


  constructor(private worldCupService: WorldCupService,
              private goldenBallService: GoldenBallService,
              private cdr: ChangeDetectorRef) {
  }

  ngOnInit(): void {
    this.loadWorldCups();
    this.loadGoldenBalls();
  }

  loadWorldCups() {
    this.loading = true;
    this.worldCupService.getAll()
      .subscribe(worldCups => {
        this.worldCups = worldCups;
        this.worldCups.forEach(wc => this.getGoldenBallsByYear(wc, wc.year))
        this.loading = false;
        this.cdr.detectChanges()
      })
  }

  loadGoldenBalls() {
    this.loading = true;
    this.goldenBallService.getAll()
      .subscribe(goldenBalls => {
        this.goldenBalls = goldenBalls;
        this.loading = false;
        this.cdr.detectChanges()
      })
  }

  getGoldenBallsByYear(worldcup, year) {
    this.loadingGoldenBalls = true;
    this.goldenBallService.getByYear(year)
      .subscribe(goldenBall => {
          worldcup.goldenBall = goldenBall;
          this.loadingGoldenBalls = false;
          this.cdr.detectChanges()
        })
  }

  getFlag(country) {
    return countriesFlag.find(c => c.name.toLowerCase() === country.toLowerCase()).flagUrl;
  }

}
