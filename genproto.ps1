go install google.golang.org/protobuf/cmd/protoc-gen-go@v1.25.0
go install google.golang.org/grpc/cmd/protoc-gen-go-grpc@v1.0.0
go get google.golang.org/grpc@v1.34.0
go install github.com/LLKennedy/mercury/cmd/protoc-gen-mercury@v0.9.0
go install github.com/LLKennedy/protoc-gen-tsjson@v0.5.0

$Directory = "./*"
$IncludeRule = "*.proto"
$ExcludeRUle = [Regex]'.*google.*|.*audit/.*|.*node_modules.*'
$GoPBPath = "./demosharedpb"
$TSPBPath = "./src"
$ProtoFiles = Get-ChildItem -path $Directory -Include $IncludeRule | Where-Object FullName -NotMatch $ExcludeRUle
foreach ($file in $ProtoFiles) {
	protoc --proto_path="$($file.DirectoryName)" --go_out=paths=source_relative:$GoPBPath --go-grpc_out=paths=source_relative:$GoPBPath --tsjson_out=$TSPBPath --mercury_out=$TSPBPath $file.FullName
}

go build $PBPath
go mod tidy