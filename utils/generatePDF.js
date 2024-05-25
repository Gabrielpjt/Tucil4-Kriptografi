import { text, image, barcodes } from '@pdfme/schemas';
import { generate } from '@pdfme/generator';

async function generateTranskrip(data) {
	const template = {
		schemas: [
			{
				nim: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 91.16,
						y: 39.8,
					},
					width: 97.09,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nama: {
					type: 'text',
					content: 'Nama: Samuel Eric Yonatan',
					position: {
						x: 88.25,
						y: 46.1,
					},
					width: 102.91,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK1: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 27.61,
						y: 65.41,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK2: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 27.29,
						y: 73.82,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK3: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 27.24,
						y: 81.97,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK4: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 26.92,
						y: 89.85,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK5: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 27.07,
						y: 98.52,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK6: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 27.28,
						y: 106.67,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK7: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 26.9,
						y: 114.82,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK8: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 27.32,
						y: 122.97,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK9: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 27.27,
						y: 131.12,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				kodeMK10: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 27.27,
						y: 139.79,
					},
					width: 43.64,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK1: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 71.26,
						y: 65.36,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK2: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 71.15,
						y: 73.77,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK3: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 70.83,
						y: 81.92,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK4: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 71.3,
						y: 90.33,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK5: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 70.98,
						y: 98.48,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK6: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 70.66,
						y: 106.89,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK7: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 70.66,
						y: 114.83,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK8: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 70.82,
						y: 122.66,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK9: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 70.76,
						y: 131.33,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				namaMK10: {
					type: 'text',
					content: 'Kriptografi dan Koding STI',
					position: {
						x: 70.77,
						y: 139.75,
					},
					width: 121.96,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK1: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.18,
						y: 65.36,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK2: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.13,
						y: 73.77,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK3: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.34,
						y: 82.18,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK4: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.29,
						y: 90.33,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK5: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.5,
						y: 98.47,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK6: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.44,
						y: 106.89,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK7: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.39,
						y: 114.77,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK8: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.45,
						y: 122.92,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK9: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.71,
						y: 131.33,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				SKSMK10: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 193.65,
						y: 139.48,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK1: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.17,
						y: 65.31,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK2: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.12,
						y: 73.72,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK3: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.33,
						y: 82.13,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK4: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.28,
						y: 90.28,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK5: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.49,
						y: 98.42,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK6: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.43,
						y: 106.84,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK7: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.44,
						y: 114.72,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK8: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.44,
						y: 122.87,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK9: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.7,
						y: 131.28,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				nilaiMK10: {
					type: 'text',
					content: 'NIM: 18221133',
					position: {
						x: 230.64,
						y: 139.43,
					},
					width: 35.7,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				jumlahSKS: {
					type: 'text',
					content: 'Total jumlah SKS = 36',
					position: {
						x: 88.46,
						y: 150.61,
					},
					width: 97.09,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				ipk: {
					type: 'text',
					content: 'IPK = 3.5',
					position: {
						x: 85.55,
						y: 156.91,
					},
					width: 102.91,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'center',
				},
				signature: {
					type: 'text',
					content: 'abcdEFGH',
					position: {
						x: 12.47,
						y: 185.22,
					},
					width: 113.23,
					height: 6.12,
					fontSize: 10,
					fontName: 'Roboto',
					verticalAlignment: 'middle',
					alignment: 'left',
				},
			},
		],
		basePdf:
			'data:application/pdf;base64,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KEFkb2JlKQovT3JkZXJpbmcgKElkZW50aXR5KQovU3VwcGxlbWVudCAwPj4KL1cgWzAgWzQ0My4zNTkzOF0gMTIgWzM0MS43OTY4OCAzNDcuNjU2MjUgMCAwIDAgMjc1Ljg3ODkxIDI2My4xODM1OV0gMjAgMjkgNTYxLjUyMzQ0IDM3IFs2NTIuMzQzNzUgNjIyLjU1ODU5IDAgNjU1Ljc2MTcyIDU2OC4zNTkzOCAwIDY4MS4xNTIzNCAwIDI3MS45NzI2NiAwIDYyNi45NTMxMyAwIDAgNzEyLjg5MDYzIDAgNjMwLjg1OTM4IDAgMCA1OTMuMjYxNzIgNTk2LjY3OTY5XSA2OSBbNTQzLjk0NTMxIDAgMCA1NjMuOTY0ODQgNTI5Ljc4NTE2IDM0Ny4xNjc5NyA1NjEuMDM1MTYgNTUwLjc4MTI1IDI0Mi42NzU3OCAwIDUwNi44MzU5NCAyNDIuNjc1NzggODc2LjQ2NDg0IDU1MS43NTc4MSA1NzAuMzEyNSA1NjEuMDM1MTYgMCAzMzguMzc4OTEgNTE1LjYyNSAzMjYuNjYwMTYgNTUxLjI2OTUzXV0KL0RXIDA+PgplbmRvYmoKMTIgMCBvYmoKPDwvRmlsdGVyIC9GbGF0ZURlY29kZQovTGVuZ3RoIDMzMj4+IHN0cmVhbQp4nF2Sy26DMBBF93yFl+0iAjtAEgkhNUkjsehDTfsBxB5SpGIsQxb8fc3cNJFqyUhnZu48GMe7al/ZdhTxu+/1kUbRtNZ4GvqL1yROdG5tJJUwrR6vxF/d1S6Kg/g4DSN1lW36qCiEiD+Cdxj9JB6eTH+ixyh+84Z8a8/i4Wt3DHy8OPdDHdlRJFFZCkNNyPRSu9e6IxGzbFGZ4G/HaRE094jPyZFQzBLd6N7Q4GpNvrZniooknFIUh3DKiKz558+hOjX6u/ZztNqG6CRJVyXTHrQBHUBbpqUCPYNSpixhSjOmXHLNa/bNX617azsOS1BFrVkrJZNE+tABG5FeInKJKgpVVI5GJIxrGDcwpuhuBR182RJNglLkzBGZYsYM9XKMmqFChpwrdZ0Kc8w/dV7+bWP64n1YFr8Q3tK8n9bS7RG53s2q+f4Ch1WrRgplbmRzdHJlYW0KZW5kb2JqCjQgMCBvYmoKPDwvVHlwZSAvRm9udAovU3VidHlwZSAvVHlwZTAKL0Jhc2VGb250IC9BQUFBQUErUm9ib3RvLVJlZ3VsYXIKL0VuY29kaW5nIC9JZGVudGl0eS1ICi9EZXNjZW5kYW50Rm9udHMgWzExIDAgUl0KL1RvVW5pY29kZSAxMiAwIFI+PgplbmRvYmoKeHJlZgowIDEzCjAwMDAwMDAwMDAgNjU1MzUgZiAKMDAwMDAwMDAxNSAwMDAwMCBuIAowMDAwMDAxODg4IDAwMDAwIG4gCjAwMDAwMDAxMDkgMDAwMDAgbiAKMDAwMDAxMTY2MiAwMDAwMCBuIAowMDAwMDAwMTQ2IDAwMDAwIG4gCjAwMDAwMDAyMzIgMDAwMDAgbiAKMDAwMDAwMjEwNiAwMDAwMCBuIAowMDAwMDAyMTYxIDAwMDAwIG4gCjAwMDAwMDIyNzggMDAwMDAgbiAKMDAwMDAxMDQwMiAwMDAwMCBuIAowMDAwMDEwNjQ4IDAwMDAwIG4gCjAwMDAwMTEyNTkgMDAwMDAgbiAKdHJhaWxlcgo8PC9TaXplIDEzCi9Sb290IDggMCBSCi9JbmZvIDEgMCBSPj4Kc3RhcnR4cmVmCjExODA4CiUlRU9GCg==',
		pdfmeVersion: '4.0.0',
	};
	const plugins = { text, image, qrcode: barcodes.qrcode };
	let totalSKS = 0;
	for (let i = 1; i < 11; i++) {
		totalSKS += Number(data[`mk${i}`]['SKS']);
	}
	const inputs = [
		{
			nim: `NIM: ${data.nim}`,
			nama: `Nama: ${data.nama}`,
			kodeMK1: data.mk1.kode,
			kodeMK2: data.mk2.kode,
			kodeMK3: data.mk3.kode,
			kodeMK4: data.mk4.kode,
			kodeMK5: data.mk5.kode,
			kodeMK6: data.mk6.kode,
			kodeMK7: data.mk7.kode,
			kodeMK8: data.mk8.kode,
			kodeMK9: data.mk9.kode,
			kodeMK10: data.mk10.kode,
			namaMK1: data.mk1.namaMK,
			namaMK2: data.mk2.namaMK,
			namaMK3: data.mk3.namaMK,
			namaMK4: data.mk4.namaMK,
			namaMK5: data.mk5.namaMK,
			namaMK6: data.mk6.namaMK,
			namaMK7: data.mk7.namaMK,
			namaMK8: data.mk8.namaMK,
			namaMK9: data.mk9.namaMK,
			namaMK10: data.mk10.namaMK,
			SKSMK1: data.mk1.SKS.toString(),
			SKSMK2: data.mk2.SKS.toString(),
			SKSMK3: data.mk3.SKS.toString(),
			SKSMK4: data.mk4.SKS.toString(),
			SKSMK5: data.mk5.SKS.toString(),
			SKSMK6: data.mk6.SKS.toString(),
			SKSMK7: data.mk7.SKS.toString(),
			SKSMK8: data.mk8.SKS.toString(),
			SKSMK9: data.mk9.SKS.toString(),
			SKSMK10: data.mk10.SKS.toString(),
			nilaiMK1: data.mk1.nilai,
			nilaiMK2: data.mk2.nilai,
			nilaiMK3: data.mk3.nilai,
			nilaiMK4: data.mk4.nilai,
			nilaiMK5: data.mk5.nilai,
			nilaiMK6: data.mk6.nilai,
			nilaiMK7: data.mk7.nilai,
			nilaiMK8: data.mk8.nilai,
			nilaiMK9: data.mk9.nilai,
			nilaiMK10: data.mk10.nilai,
			jumlahSKS: `Total jumlah SKS = ${totalSKS}`,
			ipk: `IPK = ${data.ipk}`,
			signature: data.tandatangan,
		},
	];
	const pdf = await generate({ template, plugins, inputs });

	return pdf;
	// Node.js
	// fs.writeFileSync(path.join(__dirname, 'test.pdf'), pdf);

	// Browser
	// const blob = new Blob([pdf.buffer], { type: 'application/pdf' });
	// window.open(URL.createObjectURL(blob));
}

export default generateTranskrip;
