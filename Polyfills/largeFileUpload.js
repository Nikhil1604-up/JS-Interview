1. Split the File into Chunks
Use the File.slice() method from the File API.

2. Upload Each Chunk (with Metadata)
Send each chunk to the server with:

Chunk number

Total chunks

File ID (e.g., unique hash or name)

3. On the Server
Combine the chunks in correct order

Verify completeness and merge

🖥️ Backend (Basic Idea):
Server must:

Accept each chunk

Temporarily store it

When all chunks received → merge them

async function uploadFileInChunks(file, chunkSize = 1 * 1024 * 1024) {
  const totalChunks = Math.ceil(file.size / chunkSize);

  for (let i = 0; i < totalChunks; i++) {
    const start = i * chunkSize;
    const end = Math.min(start + chunkSize, file.size);
    const chunk = file.slice(start, end);

    const formData = new FormData();
    formData.append("chunk", chunk);
    formData.append("chunkIndex", i);
    formData.append("totalChunks", totalChunks);
    formData.append("fileName", file.name);

    await fetch("/upload", {
      method: "POST",
      body: formData,
    });
  }

  console.log("✅ All chunks uploaded.");
}
