import Vue from 'vue'
import VueRouter from '../node_modules/vue-router/dist/vue-router.js'

import App from './App'
import ApprovalList from './components/ApprovalList'
import ApplyList from './components/ApplyList'
import ApplyDetail from './components/ApplyDetail'

Vue.use(VueRouter);
var router = new VueRouter();

router.map({
	'/newapply': {
		component: ApplyDetail,
		name: "NewApply",
		title: "费用申请",
		type: "new"
	},
	'/applylist': {
		component: ApplyList,
		name: "ApplyList",
		cells: [{
			id: "1",
			title: '申请1',
			status: '待审批'
		}, {
			id: "2",
			title: '申请2',
			status: '同意'
		}, {
			id: "3",
			title: '申请3',
			status: '待审批'
		}, {
			id: "4",
			title: '申请4',
			status: '不同意'
		}, {
			id: "5",
			title: '申请5',
			status: '待审批'
		}, {
			id: "6",
			title: '申请申请申请申请申请申请申请申请申请申请申请申请申请申请申请',
			status: '待审批'
		}, {
			id: "7",
			title: '申请7',
			status: '待审批'
		}, {
			id: "8",
			title: '申请8',
			status: '同意'
		}, {
			id: "9",
			title: '申请9',
			status: '待审批'
		}, {
			id: "10",
			title: '申请10',
			status: '待审批'
		}, {
			id: "11",
			title: '申请11fdjsalfjldsjfldjslfjsdlkfjlasdjflkjsldkajflkasjdlkfs',
			status: '待审批'
		}, {
			id: "12",
			title: '申请12',
			status: '不同意'
		}, {
			id: "13",
			title: '申请13',
			status: '不同意'
		}, {
			id: "14",
			title: '申请14',
			status: '待审批'
		}, {
			id: "15",
			title: '申请15',
			status: '待审批'
		}, ]
	},
	'/approvallist': {
		component: ApprovalList,
		name: "ApprovalList",
		cells: [{
			id: "1",
			title: '审批1',
			status: '待审批'
		}, {
			id: "2",
			title: '审批2',
			status: '待审批'
		}, {
			id: "3",
			title: '审批审批审批审批审批审批审批审批审批审批审批审批审批审批',
			status: '同意'
		}, {
			id: "4",
			title: '审批4',
			status: '同意'
		}, {
			id: "5",
			title: '审批5',
			status: '不同意'
		}, {
			id: "6",
			title: '审批6ffjdlafjkdsfdjkalfjkdlasjfladsjlfkjsadlkfj',
			status: '待审批'
		}, {
			id: "7",
			title: '审批7',
			status: '待审批'
		}, {
			id: "8",
			title: '审批8',
			status: '待审批'
		}, {
			id: "9",
			title: '审批9',
			status: '待审批'
		}, {
			id: "10",
			title: '审批10',
			status: '待审批'
		}, {
			id: "11",
			title: '审批11',
			status: '不同意'
		}, {
			id: "12",
			title: '审批12',
			status: '待审批'
		}, {
			id: "13",
			title: '审批13',
			status: '待审批'
		}, {
			id: "14",
			title: '审批14',
			status: '同意'
		}, {
			id: "15",
			title: '审批15',
			status: '待审批'
		}]
	},
	"/myapply/:applyid": {
		component: ApplyDetail,
		name: "MyApply",
		title: "我的申请",
		type: "apply"
	},
	"/myapproval/:approvalid": {
		component: ApplyDetail,
		name: "MyApproval",
		title: "我的审批",
		type: "approval"
	}
})

router.redirect({
	'*': '/applylist'
})

router.start(App, '#app');