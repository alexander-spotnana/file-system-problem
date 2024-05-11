type FileSystem = {
  name: string;
  parentName: string;
  isFile: boolean;
}[];

export type SystemHashMap = Map<string, string[]>;

/*
     HashMap solution:
     key = parentName
     value = array of children names

     Example:
     {
         "root": ["file1", "file2", "folder1"],
         "folder1": ["file3", "file4"]
     }
*/

export const useSystemParser = (source: FileSystem): SystemHashMap => {
  const map = new Map<string, string[]>();
  source.forEach((file) => {
    if (!map.has(file.parentName)) {
      map.set(file.parentName, []);
    }
    map.get(file.parentName)?.push(file.name);
  });

  return map;
};