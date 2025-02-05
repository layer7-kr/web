import { promises as fs } from 'fs';
import path from 'path';

/**
 * public/data 디렉토리에서 JSON 파일을 읽어와 파싱하는 함수
 * @template T - 반환될 데이터의 타입
 * @param {string} sourcePath - public/data 디렉토리 기준 JSON 파일 경로
 * @returns {Promise<T>} 파싱된 JSON 데이터를 포함한 Promise
 * @throws {Error} 파일 읽기 또는 파싱 실패시 에러 발생
 *
 * @example
 * // 활동 데이터 가져오기
 * const activities = await getJSON<ActivityDataList>('_activity.json');
 */
export async function getJSON<T>(sourcePath: string): Promise<T> {
  try {
    const jsonDirectory = path.join(process.cwd(), 'public/data');
    const fileContents = await fs.readFile(
      path.join(jsonDirectory, sourcePath),
      'utf8',
    );
    return JSON.parse(fileContents) as T;
  } catch (error) {
    console.error('Error reading JSON:', error);
    throw error;
  }
}
