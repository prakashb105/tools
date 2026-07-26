import Controller from '@ember/controller';
import { tracked } from '@glimmer/tracking';
import { action } from '@ember/object';

export default class Seedvr2ResolutionCalculatorController extends Controller {
  @tracked width = 1536;
  @tracked height = 267;
  @tracked target = 2048;

  @tracked resultShortEdge = 267;
  @tracked resultScale = '7.67';
  @tracked resultOutWidth = 11780;
  @tracked resultOutHeight = 2048;
  @tracked resultMegapixels = '24.13';

  @action
  calculate() {
    const w = Number(this.width);
    const h = Number(this.height);
    const t = Number(this.target);

    if (w <= 0 || h <= 0 || t <= 0 || isNaN(w) || isNaN(h) || isNaN(t)) {
      alert('Please enter valid values.');
      return;
    }

    const shortEdge = Math.min(w, h);
    const scale = t / shortEdge;
    const outWidth = Math.round(w * scale);
    const outHeight = Math.round(h * scale);
    const megapixels = ((outWidth * outHeight) / 1000000).toFixed(2);

    this.resultShortEdge = shortEdge;
    this.resultScale = scale.toFixed(2);
    this.resultOutWidth = outWidth;
    this.resultOutHeight = outHeight;
    this.resultMegapixels = megapixels;
  }
}
