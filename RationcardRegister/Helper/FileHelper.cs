using System.IO;


namespace Helper
{
    public static class FileHelper
    {
        public static void CopyFileSourceToDestination(string sourcePath, string destinationPath)
        {
            TakecareOfDestinationPath(destinationPath);
            File.Copy(sourcePath, destinationPath);
        }

        public static void CopyAllFileSourceToDestinationFolder(string sourcePath, string destinationPath)
        {
            Directory.CreateDirectory(destinationPath);
            
            foreach (var file in Directory.GetFiles(sourcePath))
                File.Copy(file, Path.Combine(destinationPath, Path.GetFileName(file)));

            foreach (var directory in Directory.GetDirectories(sourcePath))
                CopyAllFileSourceToDestinationFolder(directory, Path.Combine(destinationPath, Path.GetFileName(directory)));
        }

        public static string ReadFileContent(string sourcePath)
        {
            return File.ReadAllText(sourcePath);
        }

        public static void CopyFileToFile(string sourceFilePathWithName, string destinationFilePathWithName)
        {
            TakecareOfDestinationPath(destinationFilePathWithName);
            File.AppendAllText(destinationFilePathWithName, File.ReadAllText(sourceFilePathWithName));
        }
        public static void CopyImageFileToFile(string sourceFilePathWithName, string destinationFilePathWithName)
        {
            TakecareOfDestinationPath(destinationFilePathWithName);
            File.Copy(sourceFilePathWithName, destinationFilePathWithName);
        }

        public static void SaveFileFromText(string content, string destinationFilePathWithName)
        {
            TakecareOfDestinationPath(destinationFilePathWithName);
            File.WriteAllText(destinationFilePathWithName, content);
        }
        public static void TakecareOfDestinationPath(string destinationFilePathWithName)
        {
            Directory.CreateDirectory(Path.GetDirectoryName(destinationFilePathWithName));
            if (File.Exists(destinationFilePathWithName))
            {
                File.Delete(destinationFilePathWithName);
            }
        }

        public static void DeleteFile(string filePathWithName)
        {
            File.Delete(filePathWithName);
        }
    }
}
