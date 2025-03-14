abstract class MetricStrategy {
  private _value: number = 0;
  abstract readonly weight: number;
  abstract get title(): string;
  abstract get description(): string;
  protected round(value: number): number {
    return value;
  }

  get value(): number {
    return this.round(this._value);
  }

  update(days: number): this {
    this._value = this.weight * days;
    return this;
  }
}

class WaterSaved extends MetricStrategy {
  weight = 4100; // liters

  round(value: number): number {
    return Math.floor(value / 1_000_000);
  }

  get title(): string {
    return ` ${this.value.toLocaleString()} million litres of water`;
  }

  get description(): string {
    return "By choosing plant-based foods, you conserve vast amounts of freshwater that would otherwise be used for livestock drinking water, feed crop irrigation, and meat processing.";
  }
}

class CarbonReduction extends MetricStrategy {
  weight = 8.2; // kg

  round(value: number): number {
    return Math.floor(value / 1000) * 1000;
  }

  get title(): string {
    return `Over ${this.value.toLocaleString()} kg of CO2 emissions`;
  }

  get description(): string {
    return "A plant-based diet significantly reduces greenhouse gas emissions from livestock digestion, manure management, and deforestation for animal agriculture.";
  }
}

class ForestSaved extends MetricStrategy {
  weight = 11; // Square meters

  round(value: number): number {
    return Math.floor(value / 1000) * 1000;
  }

  get title(): string {
    return `Over ${this.value.toLocaleString()} square meters of forest`;
  }

  get description(): string {
    return "Reducing meat consumption helps prevent deforestation caused by land clearing for cattle grazing and soy production for animal feed.";
  }
}

class AnimalsSaved extends MetricStrategy {
  unit = "square meter";
  weight = 11; // Square meters

  get title(): string {
    return "Hundreds of animal lives";
  }

  get description(): string {
    return "Shifting to a plant-based diet directly reduces demand for factory farming, sparing animals from industrial slaughter and inhumane farming conditions.";
  }
}

const savingCalculators: MetricStrategy[] = [
  new CarbonReduction(),
  new ForestSaved(),
  new WaterSaved(),
  new AnimalsSaved(),
];

export const calculatePlantBasedSavings = (days: number): MetricStrategy[] => {
  return savingCalculators.map((calc) => calc.update(days));
};
