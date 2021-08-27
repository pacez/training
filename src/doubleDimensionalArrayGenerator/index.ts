interface IConfig {
    columns: number; // 列数
    rows: number; // 行数
    step: number; // 递增步长
    start: number; // 起始值
  }
  
  
  /**
   * author: pace_zhong@foxmail.com
   * 
   * [二维数组生成器]
   *
   * @param   {IConfig<Number>[]}  config  [二维数组生成配置]
   *
   * @return  {Array<Number>[]}            [生成的二维数组]
   */
  export = function doubleDimensionalArrayGenerator(config: IConfig): Array<Number[]> {
    
    const { columns, rows, step, start } = config;
    const arr: Array<Number[]> = [];
    const makeZero = -start; // 归零，启始计算始终从0开始
    let i = start;
  
    while (i < columns * rows * step + start) {
      // 列索引,换行索引 
      const columnsIndex = (i + makeZero) / step;
  
      // 行索引
      const currentRowIndex = Math.floor(columnsIndex / columns);
  
      if (columnsIndex % columns === 0) {
        arr.push([]);
      }
  
      arr[currentRowIndex].push(i);
  
      i += step;
    }
  
    return arr
  }