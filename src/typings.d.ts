declare interface IFileListResponse {
    files: IFile[];
    path: string;
}

declare interface IFile {
    name: string;
    isDirectory: boolean;
    size: number;
}
