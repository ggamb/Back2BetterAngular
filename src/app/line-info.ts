export interface LineInfo {
    lineCode: string;
    maximumTrainDelay: number;
    averageTrainFrequency: number;
    expectedTrainFrequency: number;
    averagePlatformWaitTime: number;
    platformWaitTimeTrendStatus: string;
    numTrains: number;
    trainFrequencyStatus: string;
}
